export default function AppBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <span
                className="material-symbols-outlined absolute top-30 left-[10%] text-accent/20 text-7xl floating-icon"
                style={{ animationDelay: "0.5s" }}
            >
                extension
            </span>

            <span
                className="material-symbols-outlined absolute bottom-20 left-[15%] text-secondary/30 text-8xl floating-icon"
                style={{ animationDelay: "1.2s" }}
            >
                school
            </span>

            <span className="material-symbols-outlined absolute top-40 right-[12%] text-soft-pink/20 text-9xl floating-icon">
                psychology
            </span>

            <span
                className="material-symbols-outlined absolute bottom-40 right-[5%] text-primary/40 text-6xl floating-icon"
                style={{ animationDelay: "0.8s" }}
            >
                star
            </span>

            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
        </div>
    )
}