import NavBar, { NavBarType } from "@/components/navbar";

export default function AboutUs() {
    return (
        <NavBar dashboard={false} aboutus={true} contactus={false} pricing={false} services={false}/>
    )
}