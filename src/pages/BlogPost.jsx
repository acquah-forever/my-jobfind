import React from 'react'

const BlogPost = () => {
  return (
    <div className="min-h-screenpy-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Finding Your Next Software Engineering Role
          </h1>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            A concise, practical guide to landing your next position.
          </p>
        </header>

        <section className="space-y-10 text-gray-800">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Apply Strategically</h2>
            <p>
              Avoid mass applications. Target roles that match your experience and tailor your
              résumé to each job. Relevance matters more than volume.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Show Impact on Your Résumé</h2>
            <p>
              Replace responsibilities with measurable outcomes. Use clear metrics like system
              performance, scale, or reliability improvements.
            </p>
            <p className="mt-2 text-gray-600">
              Example: Built Go services handling 2M+ requests/day with 99.95% uptime.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Build Visible Proof of Work</h2>
            <p>
              Maintain a strong GitHub presence, small polished projects, or technical writeups.
              Even one well-documented project can improve your chances significantly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Use Networking Effectively</h2>
            <p>
              Reconnect with peers, join communities, and request informational chats. Keep
              outreach specific and professional rather than generic.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Prepare for Interviews Systematically</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Coding: data structures, algorithms, problem-solving</li>
              <li>System design: scalability, APIs, caching, tradeoffs</li>
              <li>Behavioral: ownership, conflict, teamwork, failure</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Match Company Expectations</h2>
            <p>
              Startups value speed and ownership, mid-sized companies value consistency, and
              large tech firms focus on structure and scale.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Track Your Applications</h2>
            <p>
              Keep a simple pipeline tracker to monitor applications, interview stages, and
              follow-ups. This helps identify weak points quickly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Stay Consistent</h2>
            <p>
              Rejection is part of the process. Improve iteratively across résumé quality,
              communication, and interview performance.
            </p>
          </div>
        </section>

        <footer className="mt-12 pt-6 border-t text-sm text-gray-500">
          Built as a concise guide for software engineers navigating job searches.
        </footer>
      </div>
    </div>
  );
}

export default BlogPost
