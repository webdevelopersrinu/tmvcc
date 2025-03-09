import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaFacebook, FaTwitter } from "react-icons/fa";


function FixturesResults() {
    const startYear = 2013;
    const currentYear = new Date().getFullYear();
    const years = [];
    const [activeTab, setActiveTab] = useState("results"); // 'fixtures' or 'results'
    const [selectedMonth, setSelectedMonth] = useState("04"); // Default to April
    const [selecteYear, setSelecteYear] = useState(currentYear)
    const [matchData, setMatchData] = useState([])


    const months = [
        { name: "January", value: "01" },
        { name: "February", value: "02" },
        { name: "March", value: "03" },
        { name: "April", value: "04" },
        { name: "May", value: "05" },
        { name: "June", value: "06" },
        { name: "July", value: "07" },
        { name: "August", value: "08" },
        { name: "September", value: "09" },
        { name: "October", value: "10" },
        { name: "November", value: "11" },
        { name: "December", value: "12" },
    ];
    const BASE_URL = "https://play-cricket.com/api/v2/result_summary.json";
    const SITE_ID = 7677;
    const API_TOKEN = "c22d3b5433b9fae6dfa379749bf208d5";

    const fetchResultSummary = async (year) => {
        const url = `${BASE_URL}?site_id=${SITE_ID}&season=${year}&api_token=${API_TOKEN}`;

        try {
            const response = await axios.get(url);
            console.log(`Results for ${year}:`, response.data);
            setMatchData(response.data);
        } catch (error) {
            console.error(`Error fetching data for year ${year}`, error);
            return null;
        }
    };

    useEffect(() => {
        fetchResultSummary(selecteYear);
    }, [selecteYear])

    for (let year = startYear; year <= currentYear; year++) {
        years.push(year);
    }

    // Filtering matches based on the selected month
    const filteredMatches = matchData?.result_summary?.filter((match) =>
        match.match_date.split("/")[1] === selectedMonth
    );

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-lg font-bold">
                    FIXTURES & RESULTS <span className="text-green-600">•</span>
                </h2>
                <div className="flex space-x-2 text-gray-500">
                    <FaTwitter className="cursor-pointer hover:text-blue-500" />
                    <FaFacebook className="cursor-pointer hover:text-blue-700" />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-around bg-blue-900 text-white mt-2 py-2 rounded-t-md">
                <button
                    className={`px-4 py-2 ${activeTab === "fixtures" ? "border-b-2 border-white font-bold" : "text-gray-300 hover:text-white"
                        }`}
                    onClick={() => setActiveTab("fixtures")}
                >
                    ALL FIXTURES
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === "results" ? "border-b-2 border-white font-bold" : "text-gray-300 hover:text-white"
                        }`}
                    onClick={() => setActiveTab("results")}
                >
                    ALL RESULTS
                </button>
            </div>

            {/* Filters */}
            <div className="bg-gray-100 p-4">
                <div className="flex items-center gap-6 space-x-2">
                    <div>
                        <span className="font-semibold px-2">Month</span>
                        <select
                            className="border border-gray-300 rounded-md px-2 py-1"
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                        >
                            {months.map((month) => (
                                <option key={month.value} value={month.value}>
                                    {month.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <span className="font-semibold px-2">year</span>
                        <select
                            className="border border-gray-300 rounded-md px-2 py-1"
                            value={selecteYear}
                            onChange={(e) => setSelecteYear(e.target.value)}
                        >
                            {
                                years.map(year =>
                                    (<option key={year} value={year}>{year}</option>)
                                )
                            }
                        </select>

                    </div>
                </div>

            </div>
            {/* Fixtures or Results Display */}

            {
                activeTab === "results" && <div className="p-6">
                    {filteredMatches?.length > 0 ? (
                        filteredMatches.map((match) => (
                            <div key={match.id} className="border p-3 rounded-md bg-white shadow-md my-2">
                                <p className="font-bold">
                                    {match.match_date} - {match.match_time}
                                </p>
                                <p>
                                    {match.home_team_name} vs {match.away_team_name}
                                </p>
                                <p className="text-gray-500">Ground: {match.ground_name}</p>
                                <p
                                    className={`mt-2 font-semibold ${match.result === "C" ? "text-red-600" : "text-green-600"
                                        }`}
                                >
                                    {match.result_description}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="text-red-600 font-semibold bg-red-100 p-2 rounded-md text-center">
                            NO {activeTab.toUpperCase()} FOUND
                        </div>
                    )}
                </div>
            }

        </div>
    )
}

export default FixturesResults