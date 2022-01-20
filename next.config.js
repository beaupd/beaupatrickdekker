module.exports = {
    async redirects() {
        return [
            {
                source: "/onboarding",
                destination: "/",
                permanent: true,
            },
        ];
    },
};
