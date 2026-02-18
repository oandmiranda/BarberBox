const Container = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="max-w-[1200px] min-w-0 flex flex-col mx-auto overflow-hidden pb-7 gap-[110px] px-2 sm:px-4 md:px-6 md:gap-[170px]">
            {children}
        </div>
    )
}

export default Container;