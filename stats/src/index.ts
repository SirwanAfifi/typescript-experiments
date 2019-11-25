import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
