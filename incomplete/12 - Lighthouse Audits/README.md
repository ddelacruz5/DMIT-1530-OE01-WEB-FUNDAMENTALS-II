# Lighthouse Audits

Today, we will use Lighthouse to audit our previous lesson, **11 – Responsive Backgrounds & Image Optimization**. 

In order to do this, we must push this website to a real server, such as the DMIT student server or a service like Netlify. If you run Lighthouse while using an extension like Five Server, your results will not be accurate.

---

## What is Lighthouse? 

**Lighthouse** is an open-source, automated tool developed by Google for auditing web pages and providing insights to improve the quality of web pages. It offers detailed reports on various aspects of web performance, accessibility, SEO, and more.


### Key Features of Lighthouse:

1. **Performance**:
   - Measures how quickly a page loads and becomes interactive.
   - Metrics include First Contentful Paint (FCP), Time to Interactive (TTI), Speed Index, and more.

2. **Accessibility**:
   - Evaluates how accessible a web page is to users with disabilities.
   - Checks for issues like missing alt text, poor color contrast, and ARIA usage.

3. **Best Practices**:
   - Reviews adherence to modern web development best practices.
   - Includes checks for HTTPS usage, avoidance of deprecated APIs, and proper use of web technologies.

4. **SEO**:
   - Assesses how well a page follows SEO best practices to ensure it can be easily found by search engines.
   - Checks for valid meta tags, structured data, and other SEO-critical elements.

5. **Progressive Web App (PWA)**:
   - Evaluates whether a web page meets PWA criteria for a fast, reliable, and engaging user experience.
   - Includes checks for service workers, manifest files, and offline capabilities.

   Note: We are not building PWAs in this course, so we will generally turn this check off.


### How to Use Lighthouse:

1. **Running a Lighthouse Audit**:
   - **In Chrome DevTools**: Open Chrome DevTools, navigate to the "Lighthouse" panel, select the categories you want to audit, and click "Generate report".
   - **Lighthouse CLI**: Install Lighthouse via npm (`npm install -g lighthouse`) and run it from the command line (`lighthouse <URL>`).
   - **Web Version**: Use the online version of Lighthouse via tools like Google PageSpeed Insights.

2. **Understanding Lighthouse Reports**:
   - **Scores**: Each category (Performance, Accessibility, Best Practices, SEO, PWA) is scored out of 100. Higher scores indicate better performance and adherence to standards.
   - **Audits**: Detailed results for each checked item, including pass/fail status and recommendations for improvement.
   - **Opportunities and Diagnostics**: Highlights specific areas where improvements can be made and provides actionable suggestions.

3. **Improving Your Website**:
   - **Follow Recommendations**: Implement the suggestions provided in the report to improve scores.
   - **Iterative Testing**: Continuously test and refine your web pages by running Lighthouse audits after making major changes to see how they impact the scores.