using System;
using System.IO;
namespace Jiggle.Core.AssetManagement.FileStore
{
    public static class FileSystemHelper
    {
        /// <summary>
        /// Deletes an entire directory tree with all files and sub-directories.
        /// </summary>
        /// <param name="directoryPath">Directory path.</param>
        public static void DeleteDirectoryTree(string directoryPath)
        {
            if (string.IsNullOrWhiteSpace(directoryPath)) throw new ArgumentNullException(nameof(directoryPath));

            if (!Directory.Exists(directoryPath))
            {
                throw new DirectoryNotFoundException($"Directory [{directoryPath}] not found!");
            }

            // Delete all files
            foreach (var fileEntry in Directory.GetFiles(directoryPath))
            {
                File.Delete(fileEntry);
            }

            // Delete all subdirectories
            foreach (var directoryEntry in Directory.GetDirectories(directoryPath))
            {
                DeleteDirectoryTree(directoryEntry);
            }

            // Delete this directory
            Directory.Delete(directoryPath);
        }
    }
}
