export default function Login() {
    return (
        <main className="bg-gradient-to-bl from-lightgreen to-darkgreen h-screen">

            <div className="flex items-center justify-around">
                <h1 className="px-16 py-8">MaduMaja</h1>

                <div>
                    <a href="/login" className="button button-outline-vanilla">Se connecter</a>
                    <a href="/login" className="button button-vanilla">S'inscire</a>
                </div>
            </div>

            <div className="flex justify-around flex-wrap mt-16 px-16 space-x-16">
                <div className="border-r-2 border-vanilla pr-8">
                    <h3>Connexion</h3>
                    <form>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>

                        <div>
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" name="password" id="password" />
                        </div>

                        <button role="submit" className="button button-vanilla block mt-4">
                            Se connecter
                        </button>
                    </form>
                </div>
                <div>

                </div>
            </div>
        </main>
    )
}