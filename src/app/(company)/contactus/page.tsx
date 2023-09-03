import NavBar, { NavBarType } from "@/components/navbar";

export default function ContactUs() {
    return (
        <NavBar dashboard={false} aboutus={false} contactus={true} pricing={false} services={false}/>
    )
}