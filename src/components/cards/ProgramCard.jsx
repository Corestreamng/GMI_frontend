
export default function ProgramCard({ title, description }) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <a
        href="#"
        className="text-primary font-medium hover:underline"
      >
        Learn more →
      </a>
    </div>
  );
}
