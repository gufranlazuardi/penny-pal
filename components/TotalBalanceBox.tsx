import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DougnutChart from "./DougnutChart";

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DougnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts : {totalBanks} </h2>
        <div className="flex flex-col gap-2">
          <h2 className="total-balance-label">Total Current Balance</h2>
          <div className="total-balance-amount flex-center g ap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
