import programmingSvg from "/img/programming2.svg"

export default function Home() {
    return (
        <div className="bg-gradient-to-bl from-lightgreen to-darkgreen h-screen">

            <div className="flex items-center justify-around">
                <h1 className="px-16 py-8">MaduMaja</h1>

                <div>
                    <a href="/login" className="button button-vanilla">S'inscire | Se connecter</a>
                </div>
            </div>

            <div className="flex justify-around flex-wrap mt-16">
                <div className="max-w-lg">
                    <h3>La programmation pour tous</h3>
                    <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga officiis deleniti animi blanditiis incidunt ex, quisquam fugit sunt rem et natus nihil cumque quae. Eligendi ipsa delectus corrupti quidem.</p>
                </div>

                <img src={programmingSvg} alt="Illustration de programmation" className="max-w-2xl"/>
            </div>
        </div>
    )
}