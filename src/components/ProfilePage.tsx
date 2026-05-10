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
    queryFn: getProfile,
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
    <section
      className="
        relative
        px-6
        py-16
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
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
          </div>

          {/* SKILLS */}
          <div className="card blue">
            <div className="card-icon icon-blue">
              <FaTools />
            </div>

            <h2 className="card-title">Skills</h2>

            <Field label="Languages" value={profile.languages} />
            <Field label="Skills" value={profile.skills} />
          </div>

          {/* OTHER */}
          <div className="card pink">
            <div className="card-icon icon-pink">
              <FaInfoCircle />
            </div>

            <h2 className="card-title">Other</h2>

            <BooleanField label="Own Car" value={profile.ownACar} />

            <BooleanField label="License" value={profile.haveDrivingLicense} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= HELPERS ================= */

function formatDate(date?: string) {
  if (!date) return "-";
  return new Date(date).toLocaleDateString();
}

function Field({ label, value }: { label: string; value?: string | number }) {
  return (
    <div
      className="
        flex
        justify-between
        items-center
        py-2
        border-b
        border-white/5
      "
    >
      <span className="text-gray-400">{label}</span>

      <span className="text-white font-medium">{value ?? "-"}</span>
    </div>
  );
}

function BooleanField({ label, value }: { label: string; value?: boolean }) {
  return (
    <div
      className="
        flex
        justify-between
        items-center
        py-2
        border-b
        border-white/5
      "
    >
      <span className="text-gray-400">{label}</span>

      <span
        className={
          value ? "text-green-400 font-semibold" : "text-red-400 font-semibold"
        }
      >
        {value ? "Yes" : "No"}
      </span>
    </div>
  );
}

function LinkField({ label, value }: { label: string; value?: string }) {
  return (
    <div
      className="
        flex
        justify-between
        items-center
        py-2
        border-b
        border-white/5
      "
    >
      <span className="text-gray-400">{label}</span>

      {value ? (
        <a
          href={value}
          target="_blank"
          rel="noreferrer"
          className="
            text-cyan-400
            hover:text-cyan-300
            transition
          "
        >
          {label}
        </a>
      ) : (
        <span className="text-white">-</span>
      )}
    </div>
  );
}
