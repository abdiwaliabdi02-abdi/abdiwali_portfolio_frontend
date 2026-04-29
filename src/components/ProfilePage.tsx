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
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-xl p-8">
        {/* Name */}
        <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>

        {/* Bio */}
        <p className="text-gray-400 mb-6">
          {profile.bio || "No bio available"}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Location" value={profile.location} />
          <Field label="Nationality" value={profile.nationality} />
          <Field label="Availability" value={profile.availability} />
          <Field label="Date of Birth" value={profile.dateOfBirth} />
          <Field label="Email" value={profile.email} />
          <Field label="Phone" value={profile.phone} />
          <Field label="Address" value={profile.address} />
          <Field
            label="Expected Salary"
            value={
              profile.expectedSalary ? `$${profile.expectedSalary}` : undefined
            }
          />
          <Field label="Notice Period" value={profile.noticePeriod} />
          <Field label="Immigration Status" value={profile.immigrationStatus} />
          <Field label="Languages" value={profile.languages} />
          <Field label="Skills" value={profile.skills} />
        </div>

        {/* Boolean Fields */}
        <div className="mt-6 space-y-2">
          <BooleanField label="Own a Car" value={profile.ownACar} />
          <BooleanField
            label="Driving License"
            value={profile.haveDrivingLicense}
          />
          <BooleanField
            label="Willing to Relocate"
            value={profile.willingToRelocate}
          />
        </div>

        {/* Social Links */}
        <div className="mt-6 flex gap-6">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
          )}

          {profile.twitter && (
            <a
              href={profile.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              Twitter
            </a>
          )}

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

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
