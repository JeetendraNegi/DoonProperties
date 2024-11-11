namespace DoonProperty.Helper
{
    public static class PropertyDocumentIO
    {
        public static async Task SaveFileAsync(string filePath)
        {
            using (var fileStream = new FileStream(filePath, FileMode.Create, FileAccess.Write))
            {
                await fileStream.CopyToAsync(fileStream);
            }
        }

        public static async Task<Stream> GetFileAsync(string filePath)
        {
            var stream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
            return stream;
        }
    }
}
