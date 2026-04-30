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
      <div className="flex items-center justify-center h-screen text-white">
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
    <div className="min-h-screen text-white p-6">
      {/* 🔥 FIXED: removed background wrapper */}
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold">{profile.name}</h1>
          <p className="text-gray-400">{profile.bio}</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Personal Info */}
          <div className="card">
            <h2 className="card-title">Personal Information</h2>
            <Field label="Location" value={profile.location} />
            <Field label="Nationality" value={profile.nationality} />
            <Field label="Date of Birth" value={profile.dateOfBirth} />
            <Field label="Email" value={profile.email} />
            <Field label="Phone" value={profile.phone} />
            <Field label="Address" value={profile.address} />
          </div>

          {/* Social */}
          <div className="card">
            <h2 className="card-title">Social Links</h2>

            <LinkField label="GitHub" value={profile.github} />
            <LinkField label="Twitter" value={profile.twitter} />
            <LinkField label="LinkedIn" value={profile.linkedin} />
          </div>

          {/* Employment */}
          <div className="card">
            <h2 className="card-title">Employment Details</h2>

            <Field label="Availability" value={profile.availability} />
            <Field
              label="Expected Salary"
              value={
                profile.expectedSalary
                  ? `$${profile.expectedSalary}`
                  : undefined
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
          </div>

          {/* Skills */}
          <div className="card">
            <h2 className="card-title">Skills & Languages</h2>
            <Field label="Languages" value={profile.languages} />
            <Field label="Skills" value={profile.skills} />
          </div>

          {/* Other */}
          <div className="card">
            <h2 className="card-title">Other Details</h2>
            <BooleanField label="Own a Car" value={profile.ownACar} />
            <BooleanField
              label="Driving License"
              value={profile.haveDrivingLicense}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function Field({ label, value }: { label: string; value?: string | number }) {
  return (
    <div className="field">
      <span className="field-label">{label}</span>
      <span className="field-value">{value ?? "-"}</span>
    </div>
  );
}

function BooleanField({ label, value }: { label: string; value?: boolean }) {
  return (
    <div className="field">
      <span className="field-label">{label}</span>
      <span className={value ? "boolean-yes" : "boolean-no"}>
        {value ? "Yes" : "No"}
      </span>
    </div>
  );
}

function LinkField({ label, value }: { label: string; value?: string }) {
  return (
    <div className="field">
      <span className="field-label">{label}</span>
      {value ? (
        <a href={value} target="_blank" rel="noreferrer" className="link">
          {label}
        </a>
      ) : (
        <span className="field-value">-</span>
      )}
    </div>
  );
}
