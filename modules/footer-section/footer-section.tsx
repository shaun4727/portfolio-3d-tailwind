export const FooterSection = () => {
    return (
        <section className="bg-primary-color mt-8 md:px-gutter py-2 md:py-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm text-gray-500">
                <span>© 2026 SHAUN HOSSAIN</span>
                <span className="hidden md:inline">•</span>
                <span>Built with Tailwind & Next JS</span>
            </div>
        </section>
    );
};
