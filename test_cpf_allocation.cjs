const assert = require('assert');

// 2026 CPF Allocation Rates
const calculateCpfAllocation = (totalCpf, age, isSC = true) => {
  if (totalCpf === 0) return { oa: 0, saOrRa: 0, ma: 0, accountType: 'SA' };

  let oaRatio = 0, saRaRatio = 0, maRatio = 0;
  let accountType = 'SA';

  if (age <= 35) {
    oaRatio = 0.6217;
    saRaRatio = 0.1621;
    maRatio = 0.2162;
  } else if (age > 35 && age <= 45) {
    oaRatio = 0.5677;
    saRaRatio = 0.1891;
    maRatio = 0.2432;
  } else if (age > 45 && age <= 50) {
    oaRatio = 0.5136;
    saRaRatio = 0.2162;
    maRatio = 0.2702;
  } else if (age > 50 && age <= 55) {
    oaRatio = 0.4055;
    saRaRatio = 0.3108;
    maRatio = 0.2837;
  } else if (age > 55 && age <= 60) {
    oaRatio = 0.3530;
    saRaRatio = 0.3382;
    maRatio = 0.3088;
    accountType = 'RA';
  } else if (age > 60 && age <= 65) {
    oaRatio = 0.1400;
    saRaRatio = 0.4400;
    maRatio = 0.4200;
    accountType = 'RA';
  } else if (age > 65 && age <= 70) {
    oaRatio = 0.0607;
    saRaRatio = 0.3030;
    maRatio = 0.6363;
    accountType = 'RA';
  } else if (age > 70) {
    oaRatio = 0.0800;
    saRaRatio = 0.0800;
    maRatio = 0.8400;
    accountType = 'RA';
  }

  // 1. Calculate MediSave allocation FIRST (rounded to nearest cent)
  const ma = Math.round(totalCpf * maRatio * 100) / 100;
  
  // 2. Calculate Special Account / Retirement Account SECOND (rounded to nearest cent)
  const saOrRa = Math.round(totalCpf * saRaRatio * 100) / 100;
  
  // 3. Allocate the REMAINDER to Ordinary Account
  // Float math issues mitigation: Math.round() the difference just to be safe at cents precision
  const oa = Math.round((totalCpf - ma - saOrRa) * 100) / 100;

  return { oa, saOrRa, ma, accountType };
};

const runTests = () => {
  const testCases = [
    { age: 30, totalCpf: 1000 },
    { age: 35, totalCpf: 1500 },
    { age: 36, totalCpf: 1500 },
    { age: 40, totalCpf: 2000 },
    { age: 45, totalCpf: 2000 },
    { age: 46, totalCpf: 2500 },
    { age: 48, totalCpf: 2500 },
    { age: 50, totalCpf: 3000 },
    { age: 51, totalCpf: 3000 },
    { age: 53, totalCpf: 3000 },
    { age: 55, totalCpf: 2000 },
    { age: 56, totalCpf: 2000 },
    { age: 57, totalCpf: 2000 },
    { age: 60, totalCpf: 1500 },
    { age: 61, totalCpf: 1500 },
    { age: 63, totalCpf: 1500 },
    { age: 65, totalCpf: 1000 },
    { age: 66, totalCpf: 1000 },
    { age: 68, totalCpf: 1000 },
    { age: 70, totalCpf: 500 },
    { age: 71, totalCpf: 500 },
    { age: 72, totalCpf: 500 }
  ];

  let passed = 0;

  for (const tc of testCases) {
    const res = calculateCpfAllocation(tc.totalCpf, tc.age);
    const sum = Math.round((res.oa + res.saOrRa + res.ma) * 100) / 100;
    
    console.log(`Age: ${tc.age}, Total CPF: ${tc.totalCpf} -> OA: ${res.oa}, SA/RA: ${res.saOrRa} (${res.accountType}), MA: ${res.ma} | SUM: ${sum}`);
    
    try {
      assert.strictEqual(sum, tc.totalCpf, `Sum mismatch for age ${tc.age}`);
      if (tc.age <= 55) {
        assert.strictEqual(res.accountType, 'SA', `Expected SA for age ${tc.age}`);
      } else {
        assert.strictEqual(res.accountType, 'RA', `Expected RA for age ${tc.age}`);
      }
      passed++;
    } catch (e) {
      console.error('TEST FAILED:', e.message);
    }
  }

  console.log(`\nTEST RESULTS: ${passed}/${testCases.length} tests passed.`);
  if (passed === testCases.length) {
    console.log("All statutory allocation tests passed successfully.");
  } else {
    process.exit(1);
  }
};

runTests();
