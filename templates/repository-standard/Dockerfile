FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src
COPY ["src/App.Api/App.Api.csproj", "src/App.Api/"]
RUN dotnet restore "src/App.Api/App.Api.csproj"
COPY . .
WORKDIR /src/src/App.Api
RUN dotnet publish "App.Api.csproj" --configuration Release --output /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app
ENV ASPNETCORE_HTTP_PORTS=8080
EXPOSE 8080
COPY --from=build /app/publish .
USER $APP_UID
ENTRYPOINT ["dotnet", "App.Api.dll"]