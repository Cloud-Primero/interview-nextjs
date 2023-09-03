import NavBar, { NavBarType } from "@/components/navbar";

export default function AboutUs() {
    return (
        <NavBar dashboard={false} aboutus={false} contactus={false} pricing={false} services={true}/>
    )
}