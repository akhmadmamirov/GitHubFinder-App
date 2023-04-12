 

function Footer() {
    const footerYear = new Date().getFullYear()
    return (
        <footer className="footer p-10 bg-gray-700">&copy; Akhmadillo Mamirov {footerYear}</footer>
    )
}

export default Footer