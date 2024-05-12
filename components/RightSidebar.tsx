import Image from "next/image";
import Link from "next/link";
import React from "react";
import BackCard from "./BackCard";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5x font-bold text-blue-500">{user.firstName[0]}</span>
          </div>
          <div className="profile-details">
            <div className="profile-name">
              <h1>
                {user.firstName}
                {user.lastName}
              </h1>
              <p className="profile-email">{user.email}</p>
            </div>
          </div>
        </div>

        <section className="banks">
          <div className="flex w-full justify-between items-center">
            <h2 className="header-2">Banks</h2>
            <Link href="/" className="flex gap-2">
              <Image src="/icons/plus.svg" width={20} height={20} alt="plus" />
              <h2 className="text-14 font-semibold">Add bank</h2>
            </Link>
          </div>
          {banks?.length > 0 && (
            <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
              <div className="relative z-10">
                <BackCard
                  key={banks[0].$id}
                  account={banks[0]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
              {banks[1] && (
                <div className="absolute right-0 top-8 z-0 w-[90%]">
                  <BackCard
                    key={banks[1].$id}
                    account={banks[1]}
                    userName={`${user.firstName} ${user.lastName}`}
                    showBalance={false}
                  />
                </div>
              )}
            </div>
          )}
        </section>
      </section>
    </aside>
  );
};

export default RightSidebar;
