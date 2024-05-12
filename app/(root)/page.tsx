import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Mahira", lastName: "Kanis", email: "mahirakanis@gmail.com" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || "Guest"}
            subtext="Access and manage your accounts and transactions efficiently"
          />
        </header>
        Recent Transaction
      </div>
      <RightSidebar user={loggedIn} transacitions={[]} banks={[{ currentBalance: 123.0 }, { currentBalance: 150.0 }]} />
    </section>
  );
};

export default Home;
