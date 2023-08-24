const UseIsLoading = (bool) => {
    localStorage.setItem('isLoading', bool)
    window.dispatchEvent(new Event("storage"));
}

export default UseIsLoading;