function MyContact() {
    return (
        <div>
            <section id="contact">
                <h2>Contact</h2>
                <p>If you'd like to connect, feel free to reach out via email!</p>
                <button onClick={() => window.location.href = "mailto:catcheg5@outlook.com"}>
                    Contact Me
                </button>
            </section>
        </div>
    );
}

export default MyContact;
