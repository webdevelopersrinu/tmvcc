import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { FaFacebook, FaTwitter } from "react-icons/fa";

function FixturesResults() {
    // Build years list from 2013 to current year.
    const startYear = 2013;
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = startYear; year <= currentYear; year++) {
        years.push(year);
    }

    // Filter states for Month, Year, and Home Team.
    const [selectedMonth, setSelectedMonth] = useState("04"); // Default: April
    const [selecteYear, setSelecteYear] = useState(currentYear);
    const [selectedHomeTeam, setSelectedHomeTeam] = useState("all");

    // Tab state: "fixtures" or "results"
    const [activeTab, setActiveTab] = useState("results");

    // State for RESULTS API.
    const [resultData, setResultData] = useState(null);
    const [loadingResults, setLoadingResults] = useState(false);
    const [errorResults, setErrorResults] = useState(null);

    // State for FIXTURES API.
    const [fixturesData, setFixturesData] = useState(null);
    const [loadingFixtures, setLoadingFixtures] = useState(false);
    const [errorFixtures, setErrorFixtures] = useState(null);

    // List of months.
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

    // API endpoints and constants.
    const RESULTS_URL = "https://play-cricket.com/api/v2/result_summary.json";
    const FIXTURES_URL = "https://play-cricket.com/api/v2/matches.json";
    const SITE_ID = 7677;
    const API_TOKEN = "c22d3b5433b9fae6dfa379749bf208d5";

    // Function to fetch Results data.
    const fetchResultSummary = async (year) => {
        const url = `${RESULTS_URL}?site_id=${SITE_ID}&season=${year}&api_token=${API_TOKEN}`;
        setLoadingResults(true);
        setErrorResults(null);
        try {
            const response = await axios.get(url);
            console.log(`Results for ${year}:`, response.data);
            setResultData(response.data);
        } catch (err) {
            console.error(`Error fetching results for year ${year}`, err);
            setErrorResults(`Error fetching results for year ${year}`);
        } finally {
            setLoadingResults(false);
        }
    };

    // Function to fetch Fixtures data.
    const fetchFixturesData = async (year) => {
        const url = `${FIXTURES_URL}?site_id=${SITE_ID}&season=${year}&api_token=${API_TOKEN}`;
        setLoadingFixtures(true);
        setErrorFixtures(null);
        try {
            const response = await axios.get(url);
            console.log(`Fixtures for ${year}:`, response.data);
            setFixturesData(response.data);
        } catch (err) {
            console.error(`Error fetching fixtures for year ${year}`, err);
            setErrorFixtures(`Error fetching fixtures for year ${year}`);
        } finally {
            setLoadingFixtures(false);
        }
    };

    // Fetch data whenever activeTab or year changes.
    useEffect(() => {
        if (activeTab === "results") {
            fetchResultSummary(selecteYear);
        } else if (activeTab === "fixtures") {
            fetchFixturesData(selecteYear);
        }
        // Reset home team filter when year changes (optional)
        setSelectedHomeTeam("all");
    }, [activeTab, selecteYear]);

    // Build a unique list of Home Team names from the fetched data.
    const uniqueHomeTeams = useMemo(() => {
        let data =
            activeTab === "results"
                ? resultData?.result_summary
                : fixturesData?.matches;
        if (!data) return [];
        const teams = data
            .map((match) => match.home_team_name)
            .filter((name) => name && name.trim() !== "");
        return [...new Set(teams)];
    }, [activeTab, resultData, fixturesData]);

    // Filter RESULTS data by Month and Home Team.
    const filteredResults = resultData?.result_summary?.filter((match) => {
        const monthMatch = match.match_date.split("/")[1] === selectedMonth;
        const teamMatch =
            selectedHomeTeam === "all" || match.home_team_name === selectedHomeTeam;
        return monthMatch && teamMatch;
    });

    // Filter FIXTURES data by Month and Home Team.
    const filteredFixtures = fixturesData?.matches?.filter((match) => {
        const monthMatch = match.match_date.split("/")[1] === selectedMonth;
        const teamMatch =
            selectedHomeTeam === "all" || match.home_team_name === selectedHomeTeam;
        return monthMatch && teamMatch;
    });

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
                    className={`px-4 py-2 ${activeTab === "fixtures"
                        ? "border-b-2 border-white font-bold"
                        : "text-gray-300 hover:text-white"
                        }`}
                    onClick={() => setActiveTab("fixtures")}
                >
                    ALL FIXTURES
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === "results"
                        ? "border-b-2 border-white font-bold"
                        : "text-gray-300 hover:text-white"
                        }`}
                    onClick={() => setActiveTab("results")}
                >
                    ALL RESULTS
                </button>
            </div>

            {/* Extra Filters */}
            <div className="bg-gray-100 p-4">
                <div className="flex items-center justify-center gap-6 space-x-2 flex-wrap">
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
                        <span className="font-semibold px-2">Year</span>
                        <select
                            className="border border-gray-300 rounded-md px-2 py-1"
                            value={selecteYear}
                            onChange={(e) => setSelecteYear(e.target.value)}
                        >
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <span className="font-semibold px-2">Home Team</span>
                        <select
                            className="border border-gray-300 rounded-md px-2 py-1"
                            value={selectedHomeTeam}
                            onChange={(e) => setSelectedHomeTeam(e.target.value)}
                        >
                            <option value="all">All</option>
                            {uniqueHomeTeams.map((team) => (
                                <option key={team} value={team}>
                                    {team}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Display Section */}
            {activeTab === "results" && (
                <div className="p-6">
                    {loadingResults ? (
                        <div className="text-center text-blue-500">Loading results...</div>
                    ) : errorResults ? (
                        <div className="text-center text-red-600 bg-red-100 p-2 rounded-md">
                            {errorResults}
                        </div>
                    ) : filteredResults && filteredResults.length > 0 ? (
                        filteredResults.map((match) => (
                            <div
                                key={match.id}
                                className="border p-3 rounded-md bg-white shadow-md my-2"
                            >
                                <p className="font-bold">
                                    {match.match_date} - {match.match_time}
                                </p>
                                <div className='flex items-center gap-5 py-4'>
                                    <p>{match.home_club_name} {match.home_team_name}</p>
                                    <span className='text-gray-50 p-1 px-2 bg-red-500 rounded-full text-center'>vs</span>
                                    <p>{match.away_club_name} {match.away_team_name}</p>
                                </div>
                                <p className="text-gray-500">
                                    Ground: {match.ground_name} | {match.league_name} -{" "}
                                    {match.competition_name}
                                </p>
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
                            NO RESULTS FOUND
                        </div>
                    )}
                </div>
            )}

            {activeTab === "fixtures" && (
                <div className="p-6">
                    {loadingFixtures ? (
                        <div className="text-center text-blue-500">Loading fixtures...</div>
                    ) : errorFixtures ? (
                        <div className="text-center text-red-600 bg-red-100 p-2 rounded-md">
                            {errorFixtures}
                        </div>
                    ) : filteredFixtures && filteredFixtures.length > 0 ? (
                        filteredFixtures.map((match) => (
                            <div
                                key={match.id}
                                className="border p-3 rounded-md bg-white shadow-md my-2"
                            >
                                <p className="font-bold">
                                    {match.match_date} - {match.match_time}
                                </p>
                                <div className='flex items-center gap-5 py-4'>
                                    <p>{match.home_club_name} {match.home_team_name}</p>
                                    <span className='text-gray-50 p-1 px-2 bg-red-500 rounded-full text-center'>vs</span>
                                    <p>{match.away_club_name} {match.away_team_name}</p>
                                </div>
                                <p className="text-gray-500">
                                    League: {match.league_name} | Competition:{" "}
                                    {match.competition_name}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="text-red-600 font-semibold bg-red-100 p-2 rounded-md text-center">
                            NO FIXTURES FOUND
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default FixturesResults;
