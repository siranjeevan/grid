function OperationTabLayout({children}){
    return(
        <>
        <div className="w-full h-10 flex items-center flex-row shadow-lg bg-gray-200 p-10 justify-start" >
            {children}
        </div>
        </>
    )
}
export default OperationTabLayout;