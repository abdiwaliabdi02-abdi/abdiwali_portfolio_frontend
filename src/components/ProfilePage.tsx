import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/profile.api";
import {
  FaUser,
  FaLink,
  FaBriefcase,
  FaTools,
  FaInfoCircle,
} from "react-icons/fa";

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
  } = useQuery<Profile>({
    queryKey: ["profile", 1],
    queryFn: () => getProfile(1),
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Error loading profile
      </div>
    );

  if (!profile) return null;

  return (
    <div className="min-h-screen text-white px-6 py-10 animated-bg">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* HEADER */}
        <div>
          <h1 className="text-5xl font-bold">{profile.name}</h1>
          <p className="text-gray-400">
            {profile.bio || "Full Stack Developer"}
          </p>
        </div>

        {/* GRID */}
        <div className="cards-container">
          {/* PERSONAL */}
          <div className="card blue">
            <div className="card-icon icon-blue">
              <FaUser />
            </div>

            <h2 className="card-title">Personal Information</h2>

            <Field label="Location" value={profile.location} />
            <Field label="Nationality" value={profile.nationality} />
            <Field label="DOB" value={formatDate(profile.dateOfBirth)} />
            <Field label="Email" value={profile.email} />
            <Field label="Phone" value={profile.phone} />
            <Field label="Address" value={profile.address} />

            <div className="card-glow"></div>
          </div>

          {/* SOCIAL */}
          <div className="card pink">
            <div className="card-icon icon-pink">
              <FaLink />
            </div>

            <h2 className="card-title">Social Links</h2>

            <LinkField label="GitHub" value={profile.github} />
            <LinkField label="Twitter" value={profile.twitter} />
            <LinkField label="LinkedIn" value={profile.linkedin} />

            <div className="card-glow"></div>
          </div>

          {/* EMPLOYMENT */}
          <div className="card green">
            <div className="card-icon icon-green">
              <FaBriefcase />
            </div>

            <h2 className="card-title">Employment</h2>

            <Field label="Availability" value={profile.availability} />
            <Field
              label="Salary"
              value={
                profile.expectedSalary
                  ? `$${profile.expectedSalary}`
                  : undefined
              }
            />
            <Field label="Notice" value={profile.noticePeriod} />
            <Field label="Status" value={profile.immigrationStatus} />

            <BooleanField label="Relocate" value={profile.willingToRelocate} />

            <div className="card-glow"></div>
          </div>

          {/* SKILLS */}
          <div className="card blue">
            <div className="card-icon icon-blue">
              <FaTools />
            </div>

            <h2 className="card-title">Skills</h2>

            <Field label="Languages" value={profile.languages} />
            <Field label="Skills" value={profile.skills} />

            <div className="card-glow"></div>
          </div>

          {/* OTHER */}
          <div className="card pink">
            <div className="card-icon icon-pink">
              <FaInfoCircle />
            </div>

            <h2 className="card-title">Other</h2>

            <BooleanField label="Own Car" value={profile.ownACar} />
            <BooleanField label="License" value={profile.haveDrivingLicense} />

            <div className="card-glow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= HELPERS ================= */

function formatDate(date?: string) {
  if (!date) return "-";
  return new Date(date).toLocaleDateString();
}

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
