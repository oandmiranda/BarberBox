const Container = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="bg-surface max-w-[1200px] min-w-0 flex flex-col mx-auto gap-[170px] rounded-t-3xl overflow-hidden sm:px-6 md:px-6">
            {children}
        </div>
    )
}

export default Container;