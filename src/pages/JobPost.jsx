import React from 'react'

const JobPost = () => {
        return (
            <div className="min-h-screen  py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-gray-700 text-white p-8 sm:p-12">
                        <h1 className="text-3xl sm:text-4xl font-bold">
                            Remote Work Trends & Hiring Landscape
                        </h1>
                        <p className="mt-3 text-gray-300 text-sm sm:text-base">
                            What’s changing, who’s hiring, and how to position yourself.
                        </p>
                    </div>
                    <div className="p-6 sm:p-10 space-y-10 text-gray-800">
                        <section>
                            <h2 className="text-xl font-semibold mb-2">1. Remote Work Is Now Selective</h2>
                            <p>
                                Fully remote roles still exist, but many companies have shifted to hybrid or
                                location-flexible models. Remote-first is now a competitive advantage, not the default.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">2. Who Is Still Hiring Remotely</h2>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Global SaaS companies with distributed teams.</li>
                                <li>Early-stage startups optimizing for talent access.</li>
                                <li>Open-source-driven engineering organizations.</li>
                                <li>DevTools, cloud, and infrastructure companies.</li>
                            </ul>
                            <p className="mt-2 text-gray-600">
                                These companies prioritize output over physical presence.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">3. High-Demand Remote Roles</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    Backend Engineers (Go, Node.js, Python)
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    Frontend Engineers (React, TypeScript)
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    DevOps / Platform Engineers
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    Data Engineers / ML Engineers
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">4. What Companies Look For</h2>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Strong written communication</li>
                                <li>Async collaboration skills</li>
                                <li>Self-management and ownership</li>
                                <li>Clear documentation habits</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">5. Where to Find Remote Jobs</h2>
                            <p>
                                Most opportunities come from company career pages, referrals, and curated job boards
                                focused on distributed teams.
                            </p>
                            <div className="mt-4 grid sm:grid-cols-3 gap-3 text-center">
                                <div className="p-3 bg-gray-50 rounded-lg">Company Sites</div>
                                <div className="p-3 bg-gray-50 rounded-lg">Referrals</div>
                                <div className="p-3 bg-gray-50 rounded-lg">Remote Job Boards</div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">6. Key Trend: Async-First Teams</h2>
                            <p>
                                Companies are increasingly adopting async workflows—reducing meetings and
                                emphasizing documentation, tickets, and written updates.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">7. Bottom Line</h2>
                            <p>
                                Remote work is not disappearing—it is evolving. The best opportunities now go
                                to engineers who communicate clearly, work independently, and deliver consistently.
                            </p>
                        </section>
                    </div>

                    {/* Footer */}
                    <div className="border-t p-6 text-sm text-gray-500 text-center">
                        Remote hiring favors clarity, ownership, and async-ready engineers.
                    </div>
                </div>
            </div>
        );
    }

export default JobPost
