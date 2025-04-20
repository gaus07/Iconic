export default function StatsSection() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Track Record</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We've built a reputation for excellence in real estate development.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-12 mt-8">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sm font-medium text-muted-foreground">Years Experience</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-4xl font-bold">120+</div>
              <div className="text-sm font-medium text-muted-foreground">Projects Completed</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-4xl font-bold">5,000+</div>
              <div className="text-sm font-medium text-muted-foreground">Happy Homeowners</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-4xl font-bold">15</div>
              <div className="text-sm font-medium text-muted-foreground">Cities Worldwide</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  