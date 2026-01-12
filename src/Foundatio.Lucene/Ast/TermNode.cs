namespace Foundatio.Lucene.Ast;

/// <summary>
/// Represents a simple term query.
/// </summary>
public class TermNode : QueryNode
{
    /// <summary>
    /// Sentinel value indicating the default fuzzy distance should be used.
    /// When FuzzyDistance equals this value, it means ~ was specified without a number.
    /// </summary>
    public const int DefaultFuzzyDistance = -1;

    /// <summary>
    /// The actual default fuzzy distance value used when DefaultFuzzyDistance is specified.
    /// This is the Lucene standard default of 2.
    /// </summary>
    public const int DefaultFuzzyDistanceValue = 2;
    private ReadOnlyMemory<char> _term;
    private ReadOnlyMemory<char> _unescapedTerm;

    /// <summary>
    /// The term value as a memory slice (zero allocation).
    /// </summary>
    public ReadOnlyMemory<char> TermMemory
    {
        get => _term;
        set => _term = value;
    }

    /// <summary>
    /// The term value as a string. Use TermMemory for zero-allocation access.
    /// </summary>
    public string Term
    {
        get => _term.Span.ToString();
        set => _term = value.AsMemory();
    }

    /// <summary>
    /// The unescaped term value as a memory slice (zero allocation).
    /// </summary>
    public ReadOnlyMemory<char> UnescapedTermMemory
    {
        get => _unescapedTerm;
        set => _unescapedTerm = value;
    }

    /// <summary>
    /// The unescaped term value as a string. Use UnescapedTermMemory for zero-allocation access.
    /// </summary>
    public string UnescapedTerm
    {
        get => _unescapedTerm.Span.ToString();
        set => _unescapedTerm = value.AsMemory();
    }

    /// <summary>
    /// Optional boost value.
    /// </summary>
    public float? Boost { get; set; }

    /// <summary>
    /// Optional fuzzy distance (for fuzzy queries with ~).
    /// Use <see cref="DefaultFuzzyDistance"/> (-1) to indicate default fuzzy distance was requested.
    /// Use <see cref="GetEffectiveFuzzyDistance"/> to get the actual fuzzy distance to use.
    /// </summary>
    public int? FuzzyDistance { get; set; }

    /// <summary>
    /// Gets the effective fuzzy distance, resolving the default sentinel value to the actual default.
    /// </summary>
    /// <returns>The fuzzy distance to use, or null if not a fuzzy query.</returns>
    public int? GetEffectiveFuzzyDistance()
    {
        if (FuzzyDistance == DefaultFuzzyDistance)
            return DefaultFuzzyDistanceValue;
        return FuzzyDistance;
    }

    /// <summary>
    /// Whether this is a prefix query (ends with *).
    /// </summary>
    public bool IsPrefix { get; set; }

    /// <summary>
    /// Whether this is a wildcard query (contains * or ?).
    /// </summary>
    public bool IsWildcard { get; set; }
}
