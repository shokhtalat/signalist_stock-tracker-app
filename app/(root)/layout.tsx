import {makeGetServerInsertedHTML} from "next/dist/server/app-render/make-get-server-inserted-html";
import Header from "@/components/Header";

const Layout = async ({ children }: { children : React.ReactNode }) => {
    return (
        <main className="min-h-screen text-gray-400">
            <Header />
            <div className="container py-10">
                {children}
            </div>
        </main>
    )
}
export default Layout
