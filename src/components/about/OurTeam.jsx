const teamMembers = [
  { name: "Olubanjo Keshinro", role: "CEO & Founder" },
  { name: "Member 2", role: "Sales Director" },
  { name: "Member 3", role: "Technical Lead" },
];

const OurTeam = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform"
          >
            <div className="text-xl font-semibold text-gray-900">
              {member.name}
            </div>
            <div className="text-gray-500 mt-2">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
