import { useLocation } from 'react-router-dom';

export default function Dashboard() {
  const location = useLocation();
  const role = location.state?.role || 'student';

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h1>
      {/* Link to various sections based on role */}
    </div>
  );
}