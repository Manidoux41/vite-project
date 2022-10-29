const FormHeader = () => {
    return (
        <>
            <div id="formHeader">
                <form>
                    <label htmlFor="search-city">
                        <i className="fa-solid fa-location-dot"></i>
                        <span className="visibility-hidden">search-city</span>
                    </label>
                    <input type="text" id="search-city" placeholder="Paris, Belleville" />
                </form>
            </div>        
        </>
    );
};

export default FormHeader;