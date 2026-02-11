import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import comics from "./data/comics"

export default function App() {
  return (
    <>
    <div className="container-fluid p-0">
      <Header />
      <Main comics={comics}/>
      <Footer />
     </div>
    </>
  )
}
