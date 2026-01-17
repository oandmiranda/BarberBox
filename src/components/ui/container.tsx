const Container = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="max-w-container min-w-0 flex flex-col mx-auto gap-6 overflow-hidden py-5 px-4 sm:px-6 md:px-8">
            {children}
        </div>
    )
}

export default Container;