import DATA from "./../utils/DATA/LEAGUE_TABLE.json"
const LeagueTable = () => {
    const data = DATA.league_table[0]

    return (
        <div className="w-full">
            <div className=" mx-auto p-8 bg-gradient-to-r from-blue-500 to-purple-600 ">
                <h2 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
                    {data.name || "League Table"}
                </h2>
                <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
                                <th className="border px-6 py-4 text-lg">Pos</th>
                                {data.headings &&
                                    Object.values(data.headings).map((heading, index) => (
                                        <th key={index} className="border px-6 py-4 text-lg">
                                            {heading}
                                        </th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.values.map((team, index) => (
                                <tr
                                    key={index}
                                    className={`text-center border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'} hover:bg-gray-300 transition duration-200`}
                                >
                                    <td className="border px-6 py-4 font-semibold text-gray-800">{team.position}</td>
                                    {data.headings &&
                                        Object.keys(data.headings).map((column, idx) => (
                                            <td key={idx} className="border px-6 py-4 text-gray-700">
                                                {team[column] || "-"}
                                            </td>
                                        ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default LeagueTable