
const Description = () => {
    return (<section className="p-4 container mx-auto mt-8">
        <h1 className="text-3xl font-bold text-teal-600 mb-4">PDF Documents from React</h1>
        <p className="text-lg text-gray-700 mb-4">
            This project is a React-based web application that allows users to generate and export PDF documents from dynamically fetched data. It uses the <strong>@react-pdf/renderer</strong> library to generate PDFs directly from React components and <strong>Tailwind CSS</strong> for modern, responsive UI styling.
        </p>

        <h2 className="text-2xl font-semibold text-teal-500 mb-2">Key Features:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Table display with data fetched from the <a href="https://jsonplaceholder.typicode.com/todos" target="_blank" className="text-teal-500 underline">JSONPlaceholder API</a>.</li>
            <li>Export the data table to a PDF document with a consistent design.</li>
            <li>Beautifully styled UI using Tailwind CSS, including a responsive layout.</li>
            <li>Dynamic data fetching and PDF generation.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-teal-500 mb-2">Technologies Used:</h2>
        <ul className="list-disc list-inside text-gray-700">
            <li><strong>React:</strong> For building the user interface and component management.</li>
            <li><strong>Tailwind CSS:</strong> For responsive and modern styling.</li>
            <li><strong>Axios:</strong> For making API requests.</li>
            <li><strong>@react-pdf/renderer:</strong> To generate PDF documents.</li>
            <li><strong>Vite:</strong> For fast development and build processes.</li>
        </ul>
    </section>)
}

export default Description;
