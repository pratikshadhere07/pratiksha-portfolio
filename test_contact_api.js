/**
 * Automated Test Suite for /api/contact Serverless Function
 */
const http = require('http');
const handler = require('./api/contact.js');

function createMockReqRes(options) {
  const req = {
    method: options.method || 'POST',
    body: options.body || {},
    headers: options.headers || {}
  };

  let statusCode = 200;
  let headers = {};
  let responseData = null;
  let ended = false;

  const res = {
    setHeader: (k, v) => { headers[k] = v; },
    status: (code) => {
      statusCode = code;
      return res;
    },
    json: (data) => {
      responseData = data;
      ended = true;
      return res;
    },
    end: (data) => {
      if (data) responseData = data;
      ended = true;
      return res;
    },
    _getResult: () => ({ statusCode, headers, responseData, ended })
  };

  return { req, res };
}

async function runTests() {
  console.log('--- STARTING /api/contact UNIT & INTEGRATION TESTS ---\n');
  let passed = 0;
  let failed = 0;

  function assert(condition, testName) {
    if (condition) {
      console.log(`[PASS] ${testName}`);
      passed++;
    } else {
      console.error(`[FAIL] ${testName}`);
      failed++;
    }
  }

  // 1. GET Method Check
  {
    const { req, res } = createMockReqRes({ method: 'GET' });
    await handler(req, res);
    const result = res._getResult();
    assert(result.statusCode === 405, '1. Rejects GET requests with 405 Method Not Allowed');
    assert(result.responseData && result.responseData.success === false, '1b. Response indicates success: false');
  }

  // 2. OPTIONS Preflight Check
  {
    const { req, res } = createMockReqRes({ method: 'OPTIONS' });
    await handler(req, res);
    const result = res._getResult();
    assert(result.statusCode === 200, '2. OPTIONS preflight returns 200 OK');
    assert(result.headers['Access-Control-Allow-Origin'] === '*', '2b. CORS header Access-Control-Allow-Origin is *');
  }

  // 3. Empty Body Validation
  {
    const { req, res } = createMockReqRes({ method: 'POST', body: {} });
    await handler(req, res);
    const result = res._getResult();
    assert(result.statusCode === 400, '3. Empty body returns 400 Bad Request');
  }

  // 4. Invalid Name Validation
  {
    const { req, res } = createMockReqRes({
      method: 'POST',
      body: { name: 'A', email: 'test@example.com', subject: 'Inquiry', message: 'This is a test message.' }
    });
    await handler(req, res);
    const result = res._getResult();
    assert(result.statusCode === 400 && result.responseData.error.includes('full name'), '4. Short name (<2 chars) returns 400 with specific error');
  }

  // 5. Invalid Email Validation
  {
    const { req, res } = createMockReqRes({
      method: 'POST',
      body: { name: 'Alice Smith', email: 'not-an-email', subject: 'Inquiry', message: 'This is a test message.' }
    });
    await handler(req, res);
    const result = res._getResult();
    assert(result.statusCode === 400 && result.responseData.error.includes('valid email'), '5. Invalid email address returns 400');
  }

  // 6. Invalid Subject Validation
  {
    const { req, res } = createMockReqRes({
      method: 'POST',
      body: { name: 'Alice Smith', email: 'alice@example.com', subject: 'Hi', message: 'This is a test message.' }
    });
    await handler(req, res);
    const result = res._getResult();
    assert(result.statusCode === 400 && result.responseData.error.includes('subject'), '6. Short subject (<3 chars) returns 400');
  }

  // 7. Invalid Message Validation
  {
    const { req, res } = createMockReqRes({
      method: 'POST',
      body: { name: 'Alice Smith', email: 'alice@example.com', subject: 'Project Discussion', message: 'Short' }
    });
    await handler(req, res);
    const result = res._getResult();
    assert(result.statusCode === 400 && result.responseData.error.includes('at least 10 characters'), '7. Short message (<10 chars) returns 400');
  }

  // 8. Honeypot Anti-Spam Detection
  {
    const { req, res } = createMockReqRes({
      method: 'POST',
      body: { name: 'Spam Bot', email: 'bot@spam.com', subject: 'Spam Subject', message: 'Spamming your form here', _gotcha: 'bot-fill' }
    });
    await handler(req, res);
    const result = res._getResult();
    assert(result.statusCode === 200, '8. Honeypot bot submission returns 200 without dispatching');
  }

  // 9. Missing RESEND_API_KEY Check
  {
    delete process.env.RESEND_API_KEY;
    const { req, res } = createMockReqRes({
      method: 'POST',
      body: { name: 'John Doe', email: 'john@example.com', subject: 'Collaboration Opportunity', message: 'I would like to hire you for a project.' }
    });
    await handler(req, res);
    const result = res._getResult();
    assert(result.statusCode === 503, '9. Missing RESEND_API_KEY returns 503 Service Unavailable');
    assert(result.responseData.error.includes('RESEND_API_KEY') && result.responseData.error.includes('pratikshadhere07@gmail.com'), '9b. Informs user that RESEND_API_KEY is required for inbox delivery to pratikshadhere07@gmail.com');
  }

  // 10. Resend Success Mock Test
  {
    process.env.RESEND_API_KEY = 're_test_mock_key';
    const originalFetch = global.fetch;
    let capturedFetchUrl = '';
    let capturedFetchOptions = null;

    global.fetch = async (url, options) => {
      capturedFetchUrl = url;
      capturedFetchOptions = options;
      return {
        ok: true,
        status: 200,
        json: async () => ({ id: 'email_msg_12345' })
      };
    };

    const { req, res } = createMockReqRes({
      method: 'POST',
      body: {
        name: 'Jane Smith',
        email: 'jane@company.com',
        subject: 'Full Stack Project',
        message: 'Hello Pratiksha, I need a developer for an upcoming web application.'
      }
    });

    await handler(req, res);
    const result = res._getResult();
    const payload = JSON.parse(capturedFetchOptions.body);

    assert(result.statusCode === 200 && result.responseData.success === true, '10. Returns 200 OK on successful Resend API response');
    assert(capturedFetchUrl === 'https://api.resend.com/emails', '10b. Dispatches to official Resend API URL');
    assert(capturedFetchOptions.headers['Authorization'] === 'Bearer re_test_mock_key', '10c. Authenticates with Bearer token');
    assert(payload.to.includes('pratikshadhere07@gmail.com'), '10d. Correct recipient: pratikshadhere07@gmail.com');
    assert(payload.reply_to === 'jane@company.com', '10e. Correct reply-to: client email');

    // 11. Resend API Failure Handling
    global.fetch = async () => ({
      ok: false,
      status: 401,
      json: async () => ({ message: 'API key is invalid' })
    });

    const failReqRes = createMockReqRes({
      method: 'POST',
      body: {
        name: 'Jane Smith',
        email: 'jane@company.com',
        subject: 'Full Stack Project',
        message: 'Hello Pratiksha, I need a developer for an upcoming web application.'
      }
    });

    await handler(failReqRes.req, failReqRes.res);
    const failResult = failReqRes.res._getResult();
    assert(failResult.statusCode === 401 && failResult.responseData.success === false, '11. Propagates Resend API rejection error truthfully');
    assert(failResult.responseData.error === 'API key is invalid', '11b. Returns exact error detail from email service');

    // Restore fetch and clean env
    global.fetch = originalFetch;
    delete process.env.RESEND_API_KEY;
  }

  console.log(`\nTEST SUMMARY: ${passed} Passed, ${failed} Failed`);
  if (failed > 0) process.exit(1);
}

runTests();
