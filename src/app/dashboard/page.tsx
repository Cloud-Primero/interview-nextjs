"use client";
import NavBar, { NavBarType } from "@/components/navbar";

import Table from "@/components/table";

export default function MyPage() {
  return (
    <>
        <NavBar dashboard={true} aboutus={false} contactus={false} pricing={false} services={false}/>
        <Table/>
    </>
    
  )
}
