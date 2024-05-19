// userInfo.js

/**
 * Function to create user profiles
 * @param {string[]} names - Array of original names
 * @param {string[]} modifiedNames - Array of modified names from Task 2
 * @returns {Object[]} - Array of user profiles
 */
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1
        };
    });
}

// Exporting the function for use in other modules
module.exports = { createUserProfiles };
