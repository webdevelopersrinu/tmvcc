import React from "react";

const timelineData = [
    {
        decade: "1920s - 1950s",
        events: [
            {
                year: 1923,
                category: "Club - Black",
                details: [
                    "Club founded on May 22, 1923, as Metrovick RFC by 17 apprentices at Metropolitan Vickers.",
                    "Home ground: Broughton Park Old Ground.",
                    "Initial kit: All black.",
                    "First Club Chairman: R.B.D. Lauder."
                ]
            },
            {
                year: 1927,
                category: "Rugby - Brown",
                details: ["Club had 4 rugby teams."]
            },
            {
                year: 1928,
                category: "Rugby - Brown",
                details: [
                    "Purchased land at Flixton, establishing a permanent home.",
                    "Introduced black & white hoops in the rugby kit.",
                    "Converted a cow shed into changing rooms and a small clubhouse."
                ]
            },
            {
                year: 1939,
                category: "Club - Black",
                details: [
                    "All fixtures canceled due to WWII.",
                    "Several members lost in the war, names recorded in club history."
                ]
            },
            {
                year: 1945,
                category: "Club - Black",
                details: ["Chairman R.B.D. Lauder retired after 22 years."]
            },
            {
                year: 1948,
                category: "Cricket - Red",
                details: ["Cricket section founded under Metrovick RFCC."]
            },
            {
                year: 1950,
                category: "Cricket - Red",
                details: ["Club had 3 regular cricket teams."]
            },
            {
                year: 1958,
                category: "Cricket - Red",
                details: ["Tanners Pitch purchased."]
            }
        ]
    },
    {
        decade: "1960s - 1970s",
        events: [
            {
                year: 1960,
                category: "Cricket - Red",
                details: ["Club joined the Cheshire Cricket Association."]
            },
            {
                year: 1964,
                category: "Club - Black",
                details: ["Notable members: Banks, Bunny, Hops & Bernard."]
            },
            {
                year: 1968,
                category: "Club - Black",
                details: ["Clubhouse built."]
            },
            {
                year: 1977,
                category: "Club - Black",
                details: ["Flood defenses improved."]
            },
            {
                year: 1979,
                category: "Rugby - Brown",
                details: ["Lacrosse played at the club until 1985."]
            }
        ]
    },
    {
        decade: "1980s",
        events: [
            {
                year: 1980,
                category: "Cricket - Red",
                details: ["1st & 2nd XI won division titles."]
            },
            {
                year: 1989,
                category: "Cricket - Red",
                details: ["Club joined South Lancs League."]
            }
        ]
    },
    {
        decade: "1990s",
        events: [
            {
                year: 1990,
                category: "Cricket - Red",
                details: ["2nd XI won the league."]
            },
            {
                year: 1998,
                category: "Cricket - Red",
                details: ["Joined Miller Braggins Cheshire Cricket League.", "1st XI won the division."]
            }
        ]
    },
    {
        decade: "2000s",
        events: [
            {
                year: 2004,
                category: "Club - Black",
                details: ["Club achieved CASC status."]
            }
        ]
    }
];

const Timeline = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">Trafford Metrovics Club History</h1>
            {timelineData.map((section, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">{section.decade}</h2>
                    <div className="space-y-6">
                        {section.events.map((event, idx) => (
                            <div key={idx} className="p-4 bg-white rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-gray-900">{event.year} ({event.category})</h3>
                                <ul className="list-disc list-inside text-gray-700 mt-2">
                                    {event.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
