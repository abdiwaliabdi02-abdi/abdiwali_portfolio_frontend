import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/profile.api";

type Profile = {
  id: number;
  name: string;
  bio?: string;
  location?: string;
  nationality?: string;
  availability?: string;
  dateOfBirth?: string;
  email?: string;
  phone?: string;
  address?: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  expectedSalary?: number;
  ownACar?: boolean;
  haveDrivingLicense?: boolean;
  noticePeriod?: string;
  immigrationStatus?: string;
  referees?: string;
  willingToRelocate?: boolean;
  languages?: string;
  skills?: string;
};

export default function ProfilePage() {
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile", 1],
    queryFn: () => getProfile(1),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Error loading profile
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-6 shadow-lg">
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="text-gray-200 mt-2">
            {profile.bio || "No bio available"}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Personal Info */}
          <Card title="Personal Information">
            <Field label="Location" value={profile.location} />
            <Field label="Nationality" value={profile.nationality} />
            <Field
              label="Date of Birth"
              value={formatDate(profile.dateOfBirth)}
            />
            <Field label="Email" value={profile.email} />
            <Field label="Phone" value={profile.phone} />
            <Field label="Address" value={profile.address} />
          </Card>

          {/* Social Links */}
          <Card title="Social Links">
            <LinkField label="GitHub" url={profile.github} />
            <LinkField label="Twitter" url={profile.twitter} />
            <LinkField label="LinkedIn" url={profile.linkedin} />
          </Card>

          {/* Employment */}
          <Card title="Employment Details">
            <Field label="Availability" value={profile.availability} />
            <Field
              label="Expected Salary"
              value={
                profile.expectedSalary ? `$${profile.expectedSalary}` : "-"
              }
            />
            <Field label="Notice Period" value={profile.noticePeriod} />
            <Field
              label="Immigration Status"
              value={profile.immigrationStatus}
            />
            <Field label="Referees" value={profile.referees} />
            <BooleanField
              label="Willing to Relocate"
              value={profile.willingToRelocate}
            />
          </Card>

          {/* Skills */}
          <Card title="Skills & Languages">
            <Field label="Languages" value={profile.languages} />
            <Field label="Skills" value={profile.skills} />
          </Card>

          {/* Extra */}
          <Card title="Other Details">
            <BooleanField label="Own a Car" value={profile.ownACar} />
            <BooleanField
              label="Driving License"
              value={profile.haveDrivingLicense}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Card({ title, children }: any) {
  return (
    <div className="bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
        {title}
      </h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Field({ label, value }: { label: string; value?: string | number }) {
  return (
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="font-medium">{value ?? "-"}</p>
    </div>
  );
}

function BooleanField({ label, value }: { label: string; value?: boolean }) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span className={value ? "text-green-400" : "text-red-400"}>
        {value ? "Yes" : "No"}
      </span>
    </div>
  );
}

function LinkField({ label, url }: { label: string; url?: string }) {
  if (!url) return <Field label={label} value="-" />;

  return (
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-400 hover:underline"
      >
        {label}
      </a>
    </div>
  );
}

/* ---------- Helpers ---------- */

function formatDate(date?: string) {
  if (!date) return "-";
  return new Date(date).toLocaleDateString();
}
