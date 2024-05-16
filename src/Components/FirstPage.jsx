const FirstPage = ( {Klikni} ) => {

    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <h1 className="text-5xl">PRVA STRANA</h1>
                <button onClick={Klikni}>Click me!</button>
            </div>
        </>
    )
}

export default FirstPage;