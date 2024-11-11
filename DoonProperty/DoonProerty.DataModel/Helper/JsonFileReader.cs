using System.Text.Json;

namespace DoonProerty.DataModel.Helper
{
    public class JsonFileReader
    {
        public AppSettings ReadJsonFileAsync(string filePath)
        {
            if (!File.Exists(filePath))
            {
                throw new FileNotFoundException($"The file at {filePath} was not found.");
            }

            using (FileStream stream = File.OpenRead(filePath))
            {
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };

                AppSettings settings = JsonSerializer.Deserialize<AppSettings>(stream, options);
                return settings;
            }
        }
    }

    public class JwtSettings
    {
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public string SecretKey { get; set; }
    }

    public class AppSettings
    {
        public string AllowedHosts { get; set; }
        public string MONGODB_URI { get; set; }
        public string MONGODB_DBNAME { get; set; }
        public JwtSettings JwtSettings { get; set; }
    }
}
