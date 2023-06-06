import BootstrapNavbar from "@/components/BootstrapNavbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children, title }) => {
    return (
        <div>
            <BootstrapNavbar />
            <Header title={title} />
            <section className="py-5 main-layout">
                {children}
            </section>
            <Footer />
        </div>
    )
}

export default Layout;