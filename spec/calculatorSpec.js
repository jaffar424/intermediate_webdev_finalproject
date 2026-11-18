describe("Interest Rate Calculator Tests", function() {
  it("should calculate simple interest correctly", function() {
    let p = 1000;
    let r = 5;
    let t = 1;
    let simpleInterest = (p * r * t) / 100;
    expect(simpleInterest).toEqual(50);
  });

  it("should calculate total amount correctly", function() {
    let p = 1000;
    let simpleInterest = 50;
    let amount = p + simpleInterest;
    expect(amount).toEqual(1050);
  });
});
