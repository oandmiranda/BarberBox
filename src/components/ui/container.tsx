const Container = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="max-w-[1200px] min-w-0 flex flex-col mx-auto gap-[170px] overflow-hidden sm:px-6 md:px-6">
            {children}
        </div>
    )
}

export default Container;